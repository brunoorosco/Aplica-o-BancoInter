import {
    StatementContainer, StatementItemContainer,
    StatementItemImage, StatementItemInfo
} from './styles'
import { FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns'

interface StatementItem {
    user: {
        firstName: string,
        lastName: string
    },
    value: number,
    type: 'pay' | 'received',
    updatedAt: Date
}

const StatementItem = ({ user, value, type, updatedAt }: StatementItem) => {
    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>
            <StatementItemInfo>
                <p className='primary-color'>{value.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                <p>{type === 'pay' ? 'Pago a' : 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong></p>
                <p>{format(updatedAt, "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}

const Statement = () => {

    const statements: StatementItem[] =
        [
            {
                user: {
                    firstName: 'Bruno',
                    lastName: 'Orosco'
                },
                value: 250.00,
                type: 'pay',
                updatedAt: new Date()
            },
            {
                user: {
                    firstName: 'Roberta',
                    lastName: 'Orosco'
                },
                value: 1250.00,
                type: 'received',
                updatedAt: new Date()
            }
        ]
    return (
        <StatementContainer>
            {statements.map(statment => <StatementItem {...statment} />)}

        </StatementContainer>
    )
}

export default Statement
