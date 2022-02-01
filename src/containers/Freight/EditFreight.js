import { Input } from '../../components/UI/Input'
import { Form, Button } from 'react-bootstrap';
import { updateFreight } from '../../actions/freight.action'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const UpdateFreight = ({ theFreight }) => {

    const _id = theFreight._id;


    const [newName, setNewName] = useState(theFreight.name);
    const [newRate, setNewRate] = useState(theFreight.rate);

    const dispatch = useDispatch();

    const updatedFreight = () => {
        const upFreight = { 
            _id, 
            name: newName, 
            rate: newRate 
        };
        dispatch(updateFreight(upFreight));

    }

    return (
        <>
            <Form onSubmit={updatedFreight}>
                <Input
                    label={'Freight Category'}
                    placeholder={'Freight Category Name'}
                    value={newName}
                    type={'text'}
                    onChange={(e) => setNewName(e.target.value)}
                />

                <Input
                    label={'Freight Rate'}
                    placeholder={'Freight Category Rate'}
                    value={newRate}
                    type={'text'}
                    onChange={(e) => setNewRate(e.target.value)}
                />

                <Button style={{ marginTop: '10px' }} variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </>
    )
}