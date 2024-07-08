import Together from "./Together";

const Questions = () => {
  

  return (
    <div className='flex flex-col items-center  lg:py-[100px] w-[85%] mx-auto text-[#0F0840]'>
      <h1 className='md:text-[46px] text-[34px] font-medium pb-3 leading-[50px] '>
      Frequently asked questions
      </h1>
      <p className='text-[18px] mx-auto text-[#54506F] font-medium font-[Satoshi] mb-8 '>
      We have put together some commonly asked questions
      </p>

      <div className=' cursor-pointer mb-8 mx-auto flex flex-wrap justify-center lg:gap-[50px] gap-[30px]'>
        <Together label="Where can I subscribe to your newsletter?">
          <p>
            More details coming soon
          </p>
        </Together>
        <Together label="Where on your website can I open a customer account?">
          <p>
            More details coming soon
          </p>
        </Together>
        
      </div>

      <div className=' cursor-pointer mb-8 mx-auto flex flex-wrap  justify-center gap-[50px]'>
        <Together label="Where can in edit my address?" >
          <p>
            More details coming soon
          </p>
        </Together>
        <Together label="Where on your website can I open a customer account?">
          <p>
            More details coming soon
          </p>
        </Together>
        
      </div>

      <div className=' cursor-pointer mb-8 mx-auto flex   justify-center gap-[50px] flex-wrap'>
        <Together label="Can I order a free copy of a magazine to sample?">
          <p>
            More details coming soon
          </p>
        </Together>
        <Together label="Do you also have a physical store?">
          <p>
            More details coming soon
          </p>
        </Together>
        
      </div>

      <div className=' cursor-pointer mb-8 mx-auto flex flex-wrap  justify-center gap-[50px]'>
        <Together label="Do you accept orders via Phone or E-mail?">
          <p>
            More details coming soon
          </p>
        </Together>
        <Together label="Do I have the right to return an item?">
          <p>
            More details coming soon
          </p>
        </Together>
        
      </div>

    </div>
  )
}

export default Questions