import { fontSizes,colors,deviceSizes,
    device,
    paddings,
    margins,
    interval,
    verticalInterval, } from '../theme/theme'
import { createContext, useState, useContext, useCallback } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
    const LocalTheme = window.localStorage.getItem('theme') || 'light'
    const [ThemeMode, setThemeMode] = useState(LocalTheme)
    var addThemeObject = Object.assign({}, fontSizes, colors, deviceSizes, device, paddings, margins, interval, verticalInterval, {theme: ThemeMode})

    return (
        <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
            <StyledProvider theme={addThemeObject}>
                {' '}
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    )
}

function useTheme() {
    const context = useContext(ThemeContext)
    const { ThemeMode, setThemeMode } = context

    const toggleTheme = useCallback(() => {
        if (ThemeMode === 'light') {
            setThemeMode('dark')
            window.localStorage.setItem('theme', 'dark')
        } else {
            setThemeMode('light')
            window.localStorage.setItem('theme', 'light')
        }
    }, [ThemeMode])

    return [ThemeMode, toggleTheme]
}

export { ThemeProvider, useTheme }