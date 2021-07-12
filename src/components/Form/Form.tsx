import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, choosePower, chooseHome, chooseNemesis, chooseWeakness} from '../../redux/slices/rootSlice'
import { Input } from '../sharedComponents/Input'
import { Button } from '@material-ui/core'

import { server_calls } from '../../api'

import { useGetData } from '../../custom-hooks';

interface DroneFormProps {
    id?:string;
    data?:{}
}

interface DroneState {
    name: string;
    special_power: string;
    home_planet: string;
    nemesis: string;
    weakness: string;
}

export const Form = (props:DroneFormProps) => {
    const dispatch = useDispatch();
    let { droneData, getData } = useGetData();
    const store = useStore();
    const name = useSelector<DroneState>(state => state.name)
    const power = useSelector<DroneState>(state => state.special_power)
    const home = useSelector<DroneState>(state => state.home_planet)
    const nemesis = useSelector<DroneState>(state => state.nemesis)
    const weakness = useSelector<DroneState>(state => state.weakness)
    const { register, handleSubmit} = useForm({})
    
    const onSubmit = ( data:any, event:any ) => {
        console.log(props.id)
        console.log(data)

        if (props.id!){
            server_calls.update(props.id!, data)
            console.log(`updated ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        }else{
            dispatch(chooseName(data.name))
            dispatch(choosePower(data.special_power))
            dispatch(chooseHome(data.home_planet))
            dispatch(chooseNemesis(data.nemesis))
            dispatch(chooseWeakness(data.weakness))
            console.log(store.getState())
            server_calls.create(store.getState())
            setTimeout(()=>{ window.location.reload(); }, 1000);
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name="name" placeholder='' />
                </div>
                <div>
                    <label htmlFor="special_power">Special Power</label>
                    <Input {...register('special_power')} name="special_power" placeholder=""/>
                </div>
                <div>
                    <label htmlFor="home_planet">Home Planet</label>
                    <Input {...register('home_planet')} name="home_planet" placeholder=""/>
                </div>
                <div>
                    <label htmlFor="nemesis">Nemesis</label>
                    <Input {...register('nemesis')} name="nemesis" placeholder=""/>
                </div>
                <div>
                    <label htmlFor="weakness">Weakness</label>
                    <Input {...register('weakness')} name="weakness" placeholder=""/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )

}