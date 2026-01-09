import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden py-12">
            <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-12 sm:flex-row">
                
                <div className="flex w-full justify-center sm:w-1/2 overflow-hidden">
                    <img
                        src={illustration}
                        alt="Code Sync Illustration"
                        className="mx-auto h-auto max-h-[50vh] max-w-full object-contain"
                    />
                </div>

                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>

            </div>
        </div>
    )
}

export default HomePage
