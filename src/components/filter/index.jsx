import styled from "styled-components"
import  { FilterWrapper } from "./styles"
export const TypeFilter = (props) => {
    const { types, handleFilterChange, filter } = props

    return (
        <FilterWrapper>
            <div>
                <span>Filter: </span>
                <select name="Filter by type" onChange={handleFilterChange} value={filter}>
                    <option value="all">all</option>
                    {types.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
        </FilterWrapper>
    )
}