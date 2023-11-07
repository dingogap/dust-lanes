function SessionSummary ({sessionData}) {

return (

  sessionData.length
    ? sessionData.map((i, j) => (
        <tr key={j}>
          <td>{i.targetName}</td>
          <td>{i.commonName}</td>
          <td>{i.sessionDate}</td>
          <td>{i.dsoCategory}</td>
          <td>{i.telescope}</td>
          <td>{i.camera}</td>
        </tr>
      ))
    : ' '

)
}
export default SessionSummary