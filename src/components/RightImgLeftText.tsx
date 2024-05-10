type Props = {
  image: string;
  text1: string;
  text2: string;
}


const RightImgLeftText = ({ image, text1, text2 }: Props) => {

  return (
    <div className="flex flex-col w-full md:flex-row-reverse slide-right">
      <div className="md:w-2/5 md:h-[98.8vh]">
        <img src={image} alt="" className='w-full md:h-full h-[470px] scale-in-center' />
      </div>
      <div className="relative flex items-center justify-center pt-2 md:pt-0 md:w-3/5">
        <h2 className='text-[#ec5755] font-bold text-2xl text-center md:text-6xl flip-in-ver-right'>{text1} <br /> {text2}</h2>
        <div className="absolute space-x-4 md:space-x-14 md:pb-2 -bottom-16 md:bottom-0 md:left-[20%] flex text-white">
          <a href='https://twitter.com/iam_bankah?t=UFouGnCo6AL1bxU_MMVRg&s=09' title='Twitter' target="_blank" rel="noreferrer">Twitter</a>
          <a href='https://www.instagram.com/@iam.bankah' title='Instagram' target="_blank" rel="noreferrer">Instagram</a>
          <a href='https://www.linkedin.com/in/anthony-bekoe-bankah-080448240' title='LinkedIn' target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default RightImgLeftText