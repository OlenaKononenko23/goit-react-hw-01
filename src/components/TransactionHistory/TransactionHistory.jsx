import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
  <thead>
    <tr className={css.tr}>
      <th className={css.thHead}>Type</th>
      <th className={css.thHead}>Amount</th>
      <th className={css.thHead}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map((item) => (
            <tr key={item.id}  className={css.tblString}>
                <td className={css.tdTxt}>{item.type}</td>
                <td  className={css.tdTxt}>{item.amount}</td>
                <td  className={css.tdTxt}>{item.currency}</td>
            </tr>
            
        ))}
  </tbody>
</table>

    )
}