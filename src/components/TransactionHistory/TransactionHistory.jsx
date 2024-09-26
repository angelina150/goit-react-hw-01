import transactionHistoryStyles from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={transactionHistoryStyles.table}>
      <thead className={transactionHistoryStyles.head}>
        <tr>
          <th className={transactionHistoryStyles.headline}>Type</th>
          <th className={transactionHistoryStyles.headline}>Amount</th>
          <th className={transactionHistoryStyles.headline}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={transactionHistoryStyles.list} key={item.id}>
            <td className={transactionHistoryStyles.item}>{item.type}</td>
            <td className={transactionHistoryStyles.item}>{item.amount}</td>
            <td className={transactionHistoryStyles.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
