
"use client";
import parse, { HTMLReactParserOptions, Element, attributesToProps, domToReact, DOMNode } from 'html-react-parser';
import dynamic from 'next/dynamic';
import CMSImage from '../CustomComponents/CMSImage';
const CustomContentSlider = dynamic(() => import('../CustomComponents/CustomContentSlider'), { ssr: false });
const PostList = dynamic(() => import("@/components/CustomComponents/PostList"), { ssr: false });
const CustomTabs = dynamic(() => import('../CustomComponents/CustomTabs'), { ssr: false });
const CustomAccordian = dynamic(() => import('../CustomComponents/CustomAccordian'), { ssr: false });
const CustomMarquee = dynamic(() => import('../CustomComponents/CustomMarquee'), { ssr: false });

const PageTemplate = ({ data }: any) => {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode instanceof Element && domNode.attribs) {
                if (!domNode.attribs) {
                    return;
                }
                if (domNode.name == "animatedcounters") {
                    const props = attributesToProps(domNode.attribs);
                    //return <Header {...props} />;
                }
                // if (domNode.name === "img") {
                //     const props = attributesToProps(domNode.attribs);
                //     return <CMSImage {...props} />;
                // }
                if (domNode.name == "custompost") {
                    const props = attributesToProps(domNode.attribs);
                    return <PostList {...props} />;
                }
                if (domNode.name == "customcontentslider") {
                    const props = attributesToProps(domNode.attribs);
                    return <CustomContentSlider {...props} data={domToReact(domNode.children as DOMNode[])} />;
                }
                if (domNode.name === "customtabs") {
                    return <CustomTabs data={domToReact(domNode.children as DOMNode[])} />;
                }
                if (domNode.name === "customaccordian") {
                    const props = attributesToProps(domNode.attribs);
                    return <CustomAccordian {...props} data={domToReact(domNode.children as DOMNode[])} />;
                }
                if (domNode.name === "custommarquee") {
                    const props = attributesToProps(domNode.attribs);
                    return <CustomMarquee {...props} data={domToReact(domNode.children as DOMNode[])} />;
                }
            }
            return null;
        },
        htmlparser2: {
            lowerCaseTags: false,
            xmlMode: true,
        },
    }
    return (
        <>
            {parse(data.content, options)}
        </>
    );
}

export default PageTemplate;