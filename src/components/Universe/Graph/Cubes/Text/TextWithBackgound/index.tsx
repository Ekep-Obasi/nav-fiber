import { Text } from '@react-three/drei'
import { memo, useMemo, useState } from 'react'
import { Box3, Mesh, Shape, Vector3 } from 'three'
import { fontProps } from '../constants'

type RoundedRectProps = {
  width: number
  height: number
  radius: number
  color: string
}

const RoundedRect = ({ width, height, radius, color }: RoundedRectProps) => {
  // Create the shape only once per parameters change
  const rectShape = useMemo(() => {
    const shape = new Shape()

    // Start at the bottom left corner (sharp corner)
    shape.moveTo(-width / 2, -height / 2)

    // Bottom edge: go to the point before the bottom-right curve
    shape.lineTo(width / 2 - radius, -height / 2)
    // Bottom-right corner: round the corner using a quadratic curve
    shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius)

    // Right edge: go up to before the top-right curve
    shape.lineTo(width / 2, height / 2 - radius)
    // Top-right corner: round the corner using a quadratic curve
    shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2)

    // Top edge: straight line to the top left corner (sharp corner)
    shape.lineTo(-width / 2, height / 2)
    // Left edge: straight line down to the starting point (sharp corners)
    shape.lineTo(-width / 2, -height / 2)

    return shape
  }, [width, height, radius])

  return (
    <mesh>
      {/* The shapeGeometry automatically triangulates the THREE.Shape */}
      <shapeGeometry args={[rectShape]} />
      <meshBasicMaterial color={color} opacity={0.95} transparent />
    </mesh>
  )
}

type PropTypes = {
  text: string
  id?: string
}

export const TextWithBackground = memo(({ text, id }: PropTypes) => {
  // Default values (in case the text ref hasn't measured yet)
  const textWidth = text.length * 0.45 * 10
  const [bgWidth, setBgWidth] = useState(100)
  const bgHeight = 30
  const bgRadius = 6
  const padding = 10 // extra space to the right of the text

  const updateBgWidth = (textRef: Mesh) => {
    if (textRef) {
      textRef.updateMatrixWorld()

      // Create a bounding box from the text object
      const box = new Box3().setFromObject(textRef)
      const size = new Vector3()

      box.getSize(size)

      const finalSize = textWidth || size.x

      // Set the background width to text width plus padding
      setBgWidth(finalSize + padding * 2)
    }
  }

  return (
    <group>
      {/* The background rounded rectangle */}
      {/*
          Its mesh is positioned at [bgWidth/2 + 15, 0, 0] so that its left edge is at 15
          (since its center is bgWidth/2 to the right of its left edge).
      */}
      <mesh name="evt-handle" position={[bgWidth / 2 + 15, 0, 0]}>
        <mesh
          position={[0, 0, 2]} // Move slightly forward to ensure it captures events
          userData={{ ref_id: id }}
        >
          <boxGeometry args={[bgWidth, bgHeight, 1]} />
          <meshBasicMaterial color="yellow" depthWrite={false} opacity={0} transparent />
        </mesh>
        <RoundedRect color="#23252F" height={bgHeight} radius={bgRadius} width={bgWidth} />
      </mesh>
      {/* The text – its left edge should align with the background's left edge */}
      <Text
        ref={updateBgWidth}
        color="white"
        position={[15 + padding, 0, 1]} // start at 15 so that it's flush with the left edge of the roundrect
        {...fontProps}
        anchorX="left" // ensures the text starts at the left rather than being centered
        fontSize={10}
        name="text"
        onSync={updateBgWidth}
      >
        {text}
      </Text>
    </group>
  )
})

TextWithBackground.displayName = 'TextWithBackground'
