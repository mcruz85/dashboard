import axios from "axios";
import { useEffect, useState } from "react";

import Pagination from "components/Pagination";
import { SalePage } from "types/sales";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?size=10&page=${activePage}&sort=date,desc`)
        .then((result) => {
            setPage(result.data);
    });
  }, [activePage]);


  const changePage = (index: number) => {
      setActivePage(index);
  }

  return (
    <>
     <Pagination page={page} onPageChange={changePage} />
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(item => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount}</td>
            </tr>
          ))}   
        </tbody>
      </table>
    </div>
   
    </>
  );
};

export default DataTable;
