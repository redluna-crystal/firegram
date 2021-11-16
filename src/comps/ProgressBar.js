import React from 'react';
import useStorage from '../hooks/userStorage';
import {motion} from 'framer-motion';
import { useEffect } from 'react';
const ProgressBar = ({file, setFile}) => {
    const {progress, url } = useStorage(file);
    
    useEffect(() =>{
        if (url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar" 
            initial={{width:0}}
            animate={{width: progress + '%'}}
        > </motion.div>
    );
}

export default ProgressBar;