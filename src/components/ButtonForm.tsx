import { EyeIcon, EyeOffIcon } from 'lucide-react'

type ButtonFormProps = {
    isVisible: boolean;
    toggleVisibility: () => void;
};

const ButtonForm = ({ isVisible, toggleVisibility }: ButtonFormProps) => {

    return (

        <button
            title="EyeIcon"
            type="button"
            onClick={toggleVisibility}
            className="focus:outline-none"
        >

            {
                isVisible ? (
                    <EyeIcon size={20} className="text-slate-600 cursor-pointer" />
                ) : (
                    <EyeOffIcon
                        className="text-slate-600 cursor-pointer"
                        size={20}
                    />
                )
            }
        </button>
    )
}

export default ButtonForm