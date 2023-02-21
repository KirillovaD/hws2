import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color:'#00CC22',
                height: 5,
                padding: '20px 0',
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    height: 4,
                },
                '& .MuiSlider-thumb': {
                    height: 20,
                    width: 20,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                    },

            }}}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
