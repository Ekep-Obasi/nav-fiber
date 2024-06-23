import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { OPTIONS } from '~/components/AddItemModal/SourceTypeStep/constants'
import { TOption } from '~/components/AddItemModal/SourceTypeStep/types'
import { FormData } from '~/components/ModalsContainer/BlueprintModal/Body/Editor'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'

type Props = {
  onSelect: (type: string) => void
  dataTestId?: string
}

const defaultValues = {
  type: '',
  parent: '',
}

export const ToNode: FC<Props> = ({ onSelect, dataTestId }) => {
  const form = useForm<FormData>({
    mode: 'onChange',
    defaultValues,
  })

  const { watch, setValue } = form

  const [options, setOptions] = useState<TOption[]>([])
  const [optionsIsLoading, setOptionsIsLoading] = useState(false)

  const handleSelect = (val: TAutocompleteOption | null) => {
    setValue('parent', val?.value || '')
    onSelect(val?.value as string)
  }

  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

  useEffect(() => {
    const init = async () => {
      setOptionsIsLoading(true)

      try {
        const data = await getNodeSchemaTypes()

        const schemaOptions = data.schemas
          .filter((schema) => !schema.is_deleted && schema.type)
          .map((schema) =>
            schema?.type === 'thing'
              ? { label: 'No Parent', value: schema.type }
              : {
                  label: capitalizeFirstLetter(schema.type),
                  value: schema.type,
                },
          )
          .sort((a, b) => a.label.localeCompare(b.label))

        setOptions(schemaOptions)
      } catch (error) {
        console.warn(error)
      } finally {
        setOptionsIsLoading(false)
      }
    }

    init()
  }, [])

  const parent = watch('parent')

  const resolvedParentValue = () => options?.find((i) => i.value === parent)

  return (
    <AutoComplete
      dataTestId={dataTestId}
      isLoading={optionsIsLoading}
      onSelect={handleSelect}
      options={options || OPTIONS}
      selectedValue={resolvedParentValue()}
    />
  )
}
