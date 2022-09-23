import { useTheme } from "../../../context/themeProvider"

const SubBanner = () => {
    const [ThemeMode, toggleTheme] = useTheme()
    return (
        <>
        <img src={ThemeMode === 'dark' ? '/img/banner/sub_banner.png' : '/img/banner/sub_banner_2.png'} style={{width: '100%', marginTop: '200px',marginBottom: '180px', position: 'relative', zIndex: '2'}}/>
        </>
    )
}

export default SubBanner