export default function Resume(_: any): JSX.Element {
    return (
        <div className="container h-screen flex items-center justify-center">
            <iframe
                src="/resume.pdf"
                allowFullScreen={true}
                width='100%'
                height='100%'
            />
        </div>
    );
}
