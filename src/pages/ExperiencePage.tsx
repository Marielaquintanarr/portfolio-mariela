import CustomTabs from '../components/ExperienceTabs';
import Header from '../components/TitleHeader';
export default function Experience() {
    return (
        <>
            <div className="experience-container">
                <Header title="Experience" />
                <CustomTabs />
            </div>
        </>
    )
}