import { useState } from "react"
import { Box, Icon, Switch } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { BsMoonStars, BsSun } from 'react-icons/bs'

import { switchTheme } from "../../store/modules/theme/actions"

const ThemeChanger = ({ ...rest }) => {
  const theme = useSelector(({ theme }) => theme)
  const [value, setValue] = useState(theme === 'dark')
  const dispatch = useDispatch()

  const handleSwitch = () => {
    setValue(!value)
    dispatch(switchTheme())
  }

  return (
    <Box
      as='label'
      htmlFor='switchTheme'
      position='relative'
      {...rest}
    >
      <Switch
        id='switchTheme'
        colorScheme='primary'
        onChange={handleSwitch}
        value={value}
        defaultChecked={theme === 'dark'}
        size='lg'
      />
      {theme === 'light' ?
        <Icon
          as={BsSun}
          position='absolute'
          top={1.5}
          left={1.5}
          color='tertiary.900'
          cursor='pointer'
        /> :
        <Icon
          as={BsMoonStars}
          position='absolute'
          top={1.5}
          right={1.5}
          color='primary.100'
          cursor='pointer'
        />
      }
    </Box>
  )
}

export { ThemeChanger }
