import { List } from 'antd'
import './styles.scss'
import VirtualList from 'rc-virtual-list'
import { Move } from '@/services/types'
import { MoveItem } from './MoveItem'

type Props = {
  moves: Array<Move>
}

export const Moves = ({ moves }: Props): JSX.Element => {
  const ContainerHeight = 400

  return (
    <List className="moves__container" size="small" key="movesList">
      <VirtualList
        data={moves}
        itemKey="moves"
        height={ContainerHeight}
        itemHeight={moves?.length}
      >
        {(item) => <MoveItem item={item} key={item.move.name} />}
      </VirtualList>
    </List>
  )
}
