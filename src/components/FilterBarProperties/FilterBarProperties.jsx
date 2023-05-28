import { useForm } from "react-hook-form";
import { Context } from '../../context/context';
import { React, useContext } from "react";
import '../FilterBarProperties/FilterBarProperties.css'




function FilterBarProperties() {
    const { savedUserChoises, setSavedUserChoises } = useContext(Context);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setSavedUserChoises(data);
    // console.log(savedUserChoises);


    return (
        

            <form id="filters-div" onSubmit={handleSubmit(onSubmit)}>

                <div id="filter-first-row">

                    <select {...register(`city`)} id="city-filter" className="single-filter">
                        <option value="" hidden>City</option>
                        <option value="Houston">Houston</option>
                        <option value="Webster">Webster</option>
                        <option value="Porter">Porter</option>
                        <option value="Huffman">Huffman</option>
                    </select>

                    <select {...register(`type`)} id="type-filter" className="single-filter">
                        <option value="" hidden>House Type</option>
                        <option value="SINGLE_FAMILY">Single Family</option>
                        <option value="TOWNHOUSE">Town House</option>
                        <option value="CONDO">Condo House</option>
                    </select>

                    <select {...register(`price`)} id="price" className="single-filter">
                        <option value="" hidden>Price</option>
                        <option value="High to Low">High to Low</option>
                        <option value="Low to High">Low to High</option>
                    </select>

                </div>

                <div id="filter-second-row">

                    <select {...register(`bedrooms`)} id="bedrooms" className="single-filter">
                        <option value="" hidden>Bedrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <select {...register(`bathrooms`)} id="bathrooms" className="single-filter">
                        <option value="" hidden>Bathrooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select>

                    <button type="input" id="sumbit-btn">Find My Property</button>



                </div>

            </form>
        

    )

}

export default FilterBarProperties;