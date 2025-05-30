import axios from 'axios';
import { API_URL, ITEMS_PER_PAGE, DEFAULT_DATE_RANGE } from '../utils/constants';
import { getDateRange } from '../utils/dateUtils';


export const fetchTrendingRepos  = async(page=1) => {
    const createdDate = getDateRange(DEFAULT_DATE_RANGE);
    const url = `${API_URL}?q=created:>${createdDate}&sort=stars&order=desc&page=${page}&per_page=${ITEMS_PER_PAGE}`;

    try{
        const response = await axios.get(url);
        return response.data.items;
    }catch(error){
        console.error('Error fetching repositories:', error);
        throw error;
    }
}