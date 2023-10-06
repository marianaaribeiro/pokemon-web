import { InboxOutlined } from '@ant-design/icons'
import './styles.scss'

export const NotData = (): JSX.Element => {
  return (
    <div className="outdata">
      <InboxOutlined style={{ fontSize: 60 }} />
      <span>
        Não foi encontrado nenhuma informação sobre o tema que realizou a
        pesquisa
      </span>
    </div>
  )
}
