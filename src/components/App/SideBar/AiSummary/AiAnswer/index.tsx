import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { highlightAiSummary } from '~/components/App/SideBar/AiSummary/utils/AiSummaryHighlight'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useDataStore, useFilteredNodes } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'

type Props = {
  answer: string
}

const Wrapper = styled(Flex).attrs({
  direction: 'column',
})`
  padding: 1.5rem;
  gap: 1rem;
`

const SummaryText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
`

export const AiAnswer = ({ answer }: Props) => {
  const { fetchData, setAbortRequests } = useDataStore((s) => s)
  const { setBudget } = useUserStore((s) => s)
  const [displayedText, setDisplayedText] = useState('')
  const filteredNodes = useFilteredNodes()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!answer) {
      return
    }

    if (displayedText.length < answer.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(answer.slice(0, displayedText.length + 1))
      }, 10)

      // eslint-disable-next-line consistent-return
      return () => clearTimeout(timeoutId)
    }
  }, [answer, displayedText])

  const handleSubmit = (search: string) => {
    fetchData(setBudget, setAbortRequests, search)
  }

  const responseTextDisplay = highlightAiSummary(displayedText, filteredNodes, handleSubmit)

  return (
    <Wrapper>
      <SummaryText>{responseTextDisplay}</SummaryText>
    </Wrapper>
  )
}