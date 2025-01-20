
import SectionTwo from '@/components/MainPG/SectionTwo'
import SectionOne from '../components/MainPG/SectionOne'
import "../output.css"

function MainPage() {

  return (
    <>
      <div className='flex flex-col ml-4 mr-4'>
        <div>
          <SectionOne/>
          <SectionTwo/>
        </div>
      </div>
    </>
  )
}

export default MainPage
