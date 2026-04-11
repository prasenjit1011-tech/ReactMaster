import useApi from "../hooks/useApi";

export default function ApiHook(): JSX.Element {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const newUrl = 'https://jsonplaceholder.typicode.com/todos';
  const apiData = useApi({ url });
  const newApiData = useApi({ url: newUrl });

  return (
    <div className="apiBox">
        <div style={{paddingRight:'5px'}}>
            <div>Hook Name {apiData.name}</div>
            <div>Description: {apiData.description}</div>
            <hr />
            {apiData.data && apiData.data.map((item: any) => (
                <div key={item.id} style={{textAlign:'left'}}>
                    {item.id}) {item.title}
                </div>
            ))
            }
        </div>
        <div style={{paddingLeft:'5px', borderLeft: '1px solid #000'}}>
            <div>Hook Name {newApiData.name}</div>
            <div>Description: {newApiData.description}</div>
            <hr />
            {newApiData.data && newApiData.data.map((item: any) => (
                <div key={item.id} style={{textAlign:'left'}}>
                    {item.id}) {item.title}
                </div>
            ))
            }
        </div>
    </div>
  );
}
