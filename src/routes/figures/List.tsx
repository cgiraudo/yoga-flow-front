import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Figure } from '../../types/Figure';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const List = () => {
    const [loading, setLoading] = useState<Boolean>(
      false
    );
    const [data, setData] = useState<Figure[]>(
        []
      );

    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios.get('/stuff/to/fetch');
            setLoading(response);
          } catch (error) {
            toast.error("Erreur lors de la lecture");
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);
  
      return (
        <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <h2>Doing stuff with data</h2>
            {data.map(item => (<span>{item.nom_fr}</span>))}
          </div>
        )}
        </div>
      )
  };



export default List;