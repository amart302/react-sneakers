import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <div className="loaderProduct">
        <ContentLoader 
        speed={2}
        width={214}
        height={302}
        viewBox="0 0 214 302"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        >
            <rect x="0" y="192" rx="6" ry="6" width="214" height="20" /> 
            <rect x="0" y="218" rx="6" ry="6" width="170" height="20" /> 
            <rect x="27" y="339" rx="0" ry="0" width="95" height="36" /> 
            <rect x="209" y="333" rx="0" ry="0" width="36" height="36" /> 
            <rect x="0" y="0" rx="14" ry="14" width="214" height="176" /> 
            <rect x="180" y="268" rx="6" ry="6" width="34" height="34" /> 
            <rect x="52" y="296" rx="0" ry="0" width="1" height="0" /> 
            <rect x="0" y="268" rx="6" ry="6" width="80" height="34" />
        </ContentLoader>
    </div>
)

export default MyLoader;