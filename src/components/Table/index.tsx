import organizeData from "../../utils/organizedDataForTable";
import { Table } from "./styles";
import { TableProps } from "./types";

import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function TablePapyrus({
  data,
  headers,
  enableActions,
  onEdit,
  onChangeStatus,
}: TableProps) {
  const [organizedData] = organizeData(data, headers);

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.value}</th>
          ))}

          {enableActions && <th>Ações</th>}
        </tr>
      </thead>

      <tbody>
        {organizedData.map((row, i) => (
          <tr key={i}>
            {console.log(Object.keys(row))}
            {Object.keys(row).map((item, i) => {
              return item !== "$original" ? <td key={i}>{row[item]}</td> : null;
            })}

            {enableActions && (
              <td>
                {onEdit && (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onEdit && onEdit(row.$original)}
                  >
                    <EditIcon />
                  </IconButton>
                )}

                {onChangeStatus && (
                  <Switch
                    checked={row.$original.status}
                    onChange={() =>
                      onChangeStatus && onChangeStatus(row.$original)
                    }
                  />
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
