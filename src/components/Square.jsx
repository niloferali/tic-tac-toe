import { useEffect, useState } from "react";
import "./Square.scss";
import { motion } from "framer-motion";

const Square = ({ ind, updateSquares, clsName }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (clsName === '') {
            setChecked(false);
        }
    }, [clsName])
    
    const handleClick = () => {
        setChecked(true);
        updateSquares(ind);
    };

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`square ${ checked ? 'checked': '' }`}
            onClick={handleClick}
        >
            {clsName && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={clsName}
                ></motion.span>
            )}
        </motion.div>
    );
};

export default Square;
