import { Card, CardBody } from '@material-tailwind/react'

export default function HomeEngineering() {
    return (
        <Card className='h-full relative bg-[url(../public/images/code-sample.jpg)] bg-cover bg-center bg-no-repeat my-2'>
            <div
                className='absolute inset-0 bg-white/10 sm:bg-transparent sm:bg-gradient-to-l sm:from-white/95 sm:to-white/10'
            ></div>
            <CardBody className='relative py-32 lg:h-screen'>
                <div className='flex flex-row-reverse items-center w-full h-full'>
                    <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                        Software
                        <strong className='block font-extrabold text-black'>
                            Engineering
                        </strong>
                    </h1>
                </div>
            </CardBody>
        </Card>
    )
}