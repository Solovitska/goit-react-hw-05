import css from './Loader.module.css';
import { Oval } from 'react-loader-spinner';

export default function Loader({ isNotAbsolute }) {
    return (
        <Oval wrapperClassName={isNotAbsolute ? css.header : css.main} color='#cc002c' secondaryColor='#cc002c67' />
    );
}