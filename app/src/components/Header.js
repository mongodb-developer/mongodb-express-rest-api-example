import { H1 } from '@leafygreen-ui/typography';
import { MongoDBLogoMark } from '@leafygreen-ui/logo';

export default function Header(props) {
  let wrapperStyle = {
    display: "flex",
    flexWrap: "wrap"
  }
  
  let logoSize = 48;

  let logoStyle = { 
    width: `${logoSize}px`, 
    marginRight: `${logoSize/2}px`
  };
  
  return(
    <div style={wrapperStyle}>
      <MongoDBLogoMark style={logoStyle} height={logoSize} />
      <H1>{props.title}</H1>
    </div>
  )
}