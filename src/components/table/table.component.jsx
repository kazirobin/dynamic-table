import TableHead from "./table.head.component";
import TableBody from "./table.body.component";

function Table ({title, rows, columns,children}) {
    return (
      <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center flex-col gap-5">
        <h1 className="font-bold text-3xl">This is a Table of {title}</h1>
        <div className="backdrop-blur-md bg-white/30 rounded-xl shadow-xl overflow-hidden w-full max-w-4xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <TableHead columns={columns} />
              <TableBody rows={rows} columns={columns}>
                {children}
              </TableBody>
              
            </table>
          </div>
        </div>
      </div>
    );
  }


export default Table;
