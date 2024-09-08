import React from 'react'
import BookItem from '../components/BookGarageCard'
import { Button, CheckBox, DatePicker, DateRangePicker, FileUploader, Form, FormGroup, FormItem, Input, Label, Option, RadioButton, Select, TimePicker } from '@ui5/webcomponents-react'
import RadioButtonGroup from '@ui5/webcomponents/dist/RadioButtonGroup.js'

function BookGarage() {
    return (
        <>
            <div className='p-4'>
                <Form headerText='Booking details' labelSpan="S12 M4 L4 XL4"
                    layout="S1 M1 L2 XL2">
                    <FormGroup headerText='Vehicle details'>
                        <FormItem labelContent={<Label>Plate Number</Label>}>
                            <Input type='Text' />
                        </FormItem>
                        <FormItem labelContent={<Label>Chasis Number</Label>}>
                            <Input type='Text' />
                        </FormItem>
                        <FormItem labelContent={<Label>Driving License Number</Label>}>
                            <Input type='Text' />
                        </FormItem>
                    </FormGroup>
                    <FormGroup headerText='Duration'>
                        <FormItem labelContent={<Label>Date</Label>}>
                            <DatePicker placeholder='From'/>
                            <DatePicker placeholder='To'/>
                        </FormItem>
                        <FormItem labelContent={<Label>Time</Label>}>
                            <TimePicker placeholder='From'/>
                            <TimePicker placeholder='To'/>
                        </FormItem>
                    </FormGroup>
                    <FormGroup headerText='Vehicle Documents'>
                        <FormItem labelContent={<Label>Driving License</Label>}>
                            <FileUploader>
                                <Button>Upload</Button>
                            </FileUploader>
                        </FormItem>
                        <FormItem labelContent={<Label>Vehicle Registration</Label>}>
                            <FileUploader>
                                <Button>Upload</Button>
                            </FileUploader>
                        </FormItem>
                    </FormGroup>
                </Form>
            </div>
        </>

    )
}

export default BookGarage