import { IButton } from '../../global/interface/interface'
import { Button } from '../ui/button'

const CtaBtn: React.FC<IButton> = (props) => {
    return (
        <>
            <Button
                className="w-fit mx-auto px-6 md:px-10 py-3 md:py-5 before:ease relative overflow-hidden border border-primary bg-primary transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40"
                type="submit"
            >
                <span className="relative z-10 font-medium text-nowrap text-lg">
                    {props.name}
                </span>
            </Button>

        </>
    )
}

export default CtaBtn