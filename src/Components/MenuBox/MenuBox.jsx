import { menuData } from '../../MenuData/MenuData';
import RoundMenu from './RoundMenu';
const MenuBox = () => {
    console.log(menuData)
    return (
        <div className='flex justify-between mt-10'>
             {
                menuData.map(data => <RoundMenu key={data.label} data={data}/>)
             }           
        </div>
    );
};

export default MenuBox;