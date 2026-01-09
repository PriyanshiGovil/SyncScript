import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"
// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">


          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-12 sm:flex-row">

                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                   <img
  src={illustration}
  alt="Code Sync Illustration"
  className="mx-auto max-h-[70vh] w-auto sm:max-h-[60vh]"
/>

                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage
