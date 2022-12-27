import { Card, CardBody } from '@material-tailwind/react'

export default function HomeArchitecture() {
    return (
        <Card className='h-full relative bg-[url(../public/images/iyarles2-architecture.png)] bg-cover bg-center bg-no-repeat my-2'>
            <div
                className='absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/10'
            ></div>
            <CardBody className='relative py-32 items-center md:flex lg:h-screen md:items-center lg:px-8'>
                {/* <div className='flex flex-row items-center w-full h-full'> */}
                <div className='text-center sm:text-left'>
                    <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                        Cloud
                        <strong className='block font-extrabold text-black'>
                            Architecture
                        </strong>
                    </h1>
                    <p className='mt-4 bg-white rounded-xl max-w-lg sm:text-xl sm:leading-relaxed'>
                        Analyzing requirements and creating cost-effective, scalable, and secure cloud solutions.
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}