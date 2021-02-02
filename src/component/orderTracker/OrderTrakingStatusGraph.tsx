import { useState } from "react";
import getLinkComponent from "./getLinkComponent";
import LinkControls from './LinkControls';
import { Group } from '@visx/group';
import { hierarchy, Tree } from '@visx/hierarchy';
import { LinearGradient } from '@visx/gradient';
import { pointRadial } from 'd3-shape';
import {LocalShipping} from "@material-ui/icons";
import BatteryCharging20Icon from '@material-ui/icons/BatteryCharging20';

export interface TreeNode {
    name: string;
    isExpanded?: boolean;
    children?: TreeNode[];
}

const data: TreeNode = {
    name: 'ECOM00005520',
    children: [
        {
            name: 'ECOM00005520_1',
            children: [
                {
                    name: 'Packed',
                    children: [
                        {
                            name: 'Shipped',
                            children: [
                                {
                                    name: 'Delivered'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        // {
        //     name: 'ECOM00005520_2',
        //     children: [
        //         {
        //             name: 'Packed',
        //         }
        //     ]
        // },
        // {
        //     name: 'ECOM00005520_3',
        //     children: [
        //         {
        //             name: 'Packed',
        //             children: [
        //                 {
        //                     name: 'Shipped',
        //                     children: [
        //                         {
        //                             name: 'Delivered'
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ]
};

const defaultMargin = { top: 30, left: 30, right: 30, bottom: 70 };

export type LinkTypesProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
};

function OrderTrackingStatusGraph(props: LinkTypesProps) {

    const [layout, setLayout] = useState<string>('cartesian');
    const [orientation, setOrientation] = useState<string>('horizontal');
    const [linkType, setLinkType] = useState<string>('diagonal');
    const [stepPercent, setStepPercent] = useState<number>(0.5);

    const { width, height, margin = defaultMargin } = props;

    const innerWidth = width - margin.left - margin.right - 20;
    const innerHeight = height - margin.top - margin.bottom;

    let origin: { x: number; y: number };
    let sizeWidth: number;
    let sizeHeight: number;

    if (layout === 'polar') {
        origin = {
            x: innerWidth / 2,
            y: innerHeight / 2,
        };
        sizeWidth = 2 * Math.PI;
        sizeHeight = Math.min(innerWidth, innerHeight) / 2;
    } else {
        origin = { x: 0, y: 0 };
        if (orientation === 'vertical') {
            sizeWidth = innerWidth;
            sizeHeight = innerHeight;
        } else {
            sizeWidth = innerHeight;
            sizeHeight = innerWidth;
        }
    }

    const LinkComponent = getLinkComponent({ layout, linkType, orientation });

    return width < 10 ? null : (
        <div>
            <svg width={width} height={height}>
                <LinearGradient id="links-gradient" from="#fd9b93" to="#fe6e9e" />
                {/*<rect width={width} height={height} rx={14} fill="#272b4d" />*/}
                <Group top={margin?.top} left={margin?.left}>
                    <Tree
                        root={hierarchy(data, d => (d.isExpanded ? null : d.children))}
                        size={[sizeWidth, sizeHeight]}
                        separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}
                    >
                        {tree => (
                            <Group top={origin.y} left={origin.x}>
                                {tree.links().map((link, i) => (
                                    <LinkComponent
                                        key={i}
                                        data={link}
                                        percent={stepPercent}
                                        stroke="rgb(254,110,158,0.6)"
                                        strokeWidth="1"
                                        fill="none"
                                    />
                                ))}

                                {tree.descendants().map((node, key) => {
                                    const width = 40;
                                    const height = 20;

                                    let top: number;
                                    let left: number;
                                    if (layout === 'polar') {
                                        const [radialX, radialY] = pointRadial(node.x, node.y);
                                        top = radialY;
                                        left = radialX;
                                    } else if (orientation === 'vertical') {
                                        top = node.y;
                                        left = node.x;
                                    } else {
                                        top = node.x;
                                        left = node.y;
                                    }

                                    return (
                                        <Group top={top} left={left} key={key}>
                                            {node.depth === 0 && (
                                                <circle
                                                    r={12}
                                                    fill="url('#links-gradient')"
                                                    onClick={() => {
                                                        node.data.isExpanded = !node.data.isExpanded;
                                                        console.log(node);
                                                    }}
                                                />
                                            )}
                                            {node.depth !== 0 && (
                                                <rect
                                                    height={height}
                                                    width={width + 40}
                                                    y={-height / 2}
                                                    x={-(width  + 40 )/ 2}
                                                    fill="#fff"
                                                    stroke={node.data.children ? '#03c0dc' : '#26deb0'}
                                                    strokeWidth={1}
                                                    strokeDasharray={node.data.children ? '0' : '2,2'}
                                                    strokeOpacity={node.data.children ? 1 : 0.6}
                                                    rx={node.data.children ? 0 : 10}
                                                    onClick={() => {
                                                        node.data.isExpanded = !node.data.isExpanded;
                                                        console.log(node);
                                                    }}
                                                />
                                            )}
                                            <text
                                                dy=".33em"
                                                fontSize={9}
                                                fontFamily="Arial"
                                                textAnchor="middle"
                                                style={{ pointerEvents: 'none' }}
                                            >
                                                {node.data.name}
                                            </text>
                                        </Group>
                                    );
                                })}
                            </Group>
                        )}
                    </Tree>
                </Group>
            </svg>
        </div>
    );
}

export default OrderTrackingStatusGraph;