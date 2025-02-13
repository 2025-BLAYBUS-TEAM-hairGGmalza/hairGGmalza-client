import React from 'react'

const DesignerPage = ({ params }: { params: { id: string } }) => {
   return (
      <div>DesignerPage of {params.id}</div>
   )
}

export default DesignerPage