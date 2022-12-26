import { Card, CardBody } from '@material-tailwind/react'

export default function HomeArchitecture() {
    return (
        <Card className='h-full relative bg-[url(../public/images/iyarles2-architecture.png)] bg-contain bg-center bg-no-repeat my-2'>
            <div
                className='absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25'
            ></div>
            <CardBody className='relative lg:h-screen'>
                <div className='flex flex-row items-center w-full h-full'>
                    <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                        Cloud
                        <strong className='block font-extrabold text-black'>
                            Architecture
                        </strong>
                    </h1>
                </div>
            </CardBody>
        </Card>
    )
}