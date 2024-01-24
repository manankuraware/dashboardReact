import styles from './Expenses.module.scss'
import personOne from '../../assets/png/person1.png'
import personTwo from '../../assets/png/person2.png'
import personThree from '../../assets/png/person3.png'
import addIcon from '../../assets/png/addIcon.png'
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { useState } from 'react'
import optionIcon from '../../assets/png/menuIcon.png'
import cartIcon from '../../assets/svg/cartIcon.svg'

const Expenses = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const onMouseOver = (data: any, index: number) => {
        setActiveIndex(index)
    }
    return (
        <main className={styles.expenses}>
            <div className={styles.expensesCard}>
                <section className={styles.expensesOverview}>
                    <div className={styles.expensesHeader}>
                        <p className={styles.expensesTitle}>Expenses</p>
                        <div className={styles.expensesActions}>
                            <div className={styles.personImages}>
                                <img src={personOne} alt="" />
                                <img src={personTwo} alt="" />
                                <img src={personThree} alt="" />
                            </div>
                            <button>
                                <img src={addIcon} alt="add" />
                            </button>
                        </div>
                    </div>
                    <p className={styles.dateRange}>01-24 Jan, 2024</p>
                    {/* imported this bar graph from recharts*/}
                    <ResponsiveContainer width="100%" minHeight="9vh">
                        <BarChart width={150} height={40} data={data}>
                            <Bar dataKey="uv" fill="rgba(21,122,255,.2)"
                                onMouseOver={onMouseOver}>
                                {data.map((entry, index) =>
                                    <Cell cursor="pointer" fill={index == activeIndex ? "rgb(21,122,255)" : "rgba(21,122,255,.2)"}
                                        key={index}
                                    />
                                )}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>

                    <div className={styles.expensesOverviewHeader}>
                        <p className={styles.expensesOverviewTitle}>Today</p>
                        <button>
                            <img src={optionIcon} alt="options" />
                        </button>
                    </div>

                    <ul>
                        <li className={styles.expenseItem}>
                            <div className={styles.expenseItemLeft}>
                                <div className={styles.expenseItemDiv}>
                                    <img src={cartIcon} alt="cart" />
                                </div>
                                <div className={styles.expenseItemDetails}>
                                    <p className={styles.expenseItemTitle}>Grocery</p>
                                    <p className={styles.expenseItemTime}>5:10 PM ∙ La Espada</p>
                                </div>
                            </div>
                            <p className={styles.expenseItemPrice}>-$326.7</p>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default Expenses