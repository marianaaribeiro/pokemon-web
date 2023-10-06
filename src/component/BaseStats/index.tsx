import { Progress } from 'antd'
import './styles.scss'
import { Stat } from '@/services/types'

type Props = {
  baseStats: Array<Stat>
}

export const BaseStats = ({ baseStats }: Props): JSX.Element => {
  return (
    <div className="baseStats">
      <h2>Base Stats</h2>
      {baseStats?.map((stat) => (
        <div key={stat.stat.name} className="baseStats__individuals">
          <span>{stat.stat.name}</span>
          <Progress
            strokeLinecap="butt"
            percent={stat.base_stat / 2}
            format={() => `${stat.base_stat}`}
            steps={10}
          />
        </div>
      ))}
    </div>
  )
}
