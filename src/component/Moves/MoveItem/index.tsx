import { Move, VersionDetail } from '@/services/types'
import { List } from 'antd'
import '../styles.scss'

type Props = {
  item: Move
}

type DescProps = {
  details: VersionDetail
}

const Description = ({ details }: DescProps) => (
  <div className="details__container">
    <div>
      <span>Level learned:</span>
      <span>{details.level_learned_at}</span>
    </div>
    <div>
      <span>how to learn:</span>
      <span>{details.move_learn_method.name}</span>
    </div>
  </div>
)

export const MoveItem = ({ item }: Props): JSX.Element => {
  return (
    <List.Item key={item.move.name}>
      <List.Item.Meta
        title={<span>{item.move.name}</span>}
        description={
          <Description
            details={
              item.version_group_details[item.version_group_details.length - 1]
            }
          />
        }
      />
    </List.Item>
  )
}
