import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"

const HomePage: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-dark overflow-hidden">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-12 px-6">

        {/* Illustration */}
        <div className="flex w-1/2 justify-center">
          <img
            src={illustration}
            alt="Code Sync Illustration"
            className="max-h-[65vh] w-auto object-contain"
          />
        </div>

        {/* Form */}
        <div className="flex w-1/2 justify-center">
          <FormComponent />
        </div>

      </div>
    </div>
  )
}

export default HomePage
