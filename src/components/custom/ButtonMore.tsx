import { AiOutlinePlus } from "react-icons/ai"; 
import { Button } from "../ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip"  
import { Link } from "react-router-dom";

const MoreBtn: React.FC = () => {
    return (
        <Link to={'blog/new/'}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button 
                        variant="outline" 
                        size="icon"
                        className="bg-light text-primary hover:text-blue-900 hover:bg-white"
                        >
                            <AiOutlinePlus className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary/60">
                        <p>Créer ton blog</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </Link>
    )
}

export default MoreBtn