import { DataGrid, GridEditCellPropsParams, GridRowsProp } from '@material-ui/data-grid';
import { Label } from '../styles/CommonStyles';
import styled from 'styled-components';
import { proposalsColumns } from '../_common/ProposalsColumns';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../../redux/reducers';

const ProposalsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

interface IProps {
    items: GridRowsProp,
    onChange: (items: GridRowsProp) => void
}

function ProposalsEdit(props: IProps) {

    for (let i in proposalsColumns) {
        proposalsColumns[i].editable = true;
    }

    const rows = useSelector((state: IGlobalState) => state.userData?.proposals);
    if (rows === undefined) return null;

    const handleChange = (params: GridEditCellPropsParams) => {
        const proposals = [...props.items];
        const idToUpdate = params.id;
        const newValue = params.props.value;
        const field = params.field;

        for (let key in proposals) {
            let attr = proposals[key];
            if (idToUpdate === attr.id) {
                attr[field] = newValue;
            }
        }

        props.onChange(proposals)
    }

    return (
        <ProposalsWrapper>
            <Label>Proposals</Label>
            <div style={{ minHeight: 214, width: '100%' }}>
                <DataGrid rows={rows} columns={proposalsColumns} hideFooter onEditCellChangeCommitted={(params) => handleChange(params)} />
            </div>
        </ProposalsWrapper>
    );
}

export default ProposalsEdit;