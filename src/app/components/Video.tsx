export function Video() {
  return (
    <div className='max-w-4xl m-auto lg:mt-52 -mt-14 flex lg:flex-row  flex-col'>

      <div className=" flex lg:flex-row flex-col md:flex-row mt-32 lg:mt-0 ml-24 md:ml-0 justify-center lg:ml-0 md:gap-20 gap-20">
        <div className="lg:w-[280px] w-56 md:w-52">
          <video width="440" height="240" playsInline controls >
            <source src="/img/video1.mp4" type="video/mp4" />
            <track
              src="/img/video1.mp4"
              kind=" subtitles"
              srcLang="pt-BR"
              label="Português"
            />
          </video>
        </div>

        <div className="lg:w-[280px] md:w-52  w-56">
          <video width="440" height="240" playsInline controls >
            <source src="/img/video2.mp4" type="video/mp4" />
            <track
              src="/img/video2.mp4"
              kind=" subtitles"
              srcLang="pt-BR"
              label="Português"

            />
          </video>
        </div>

        <div className="lg:w-[280px] md:w-52  w-56">
          <video width="440" height="240" controls playsInline>
            <source src="/img/video3.mp4" type="video/mp4" />
            <track
              src="/img/video3.mp4"
              kind=" subtitles"
              srcLang="pt-BR"
              label="Português"
            />
          </video>
        </div>
      </div>
    </div>
  )
}