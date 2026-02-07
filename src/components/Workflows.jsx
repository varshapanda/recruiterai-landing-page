import React from "react";
import { motion } from "framer-motion";
import {
  FileSearch,
  Calendar,
  Users,
  Mail,
  CheckCircle,
  XCircle,
  Clock,
  Sparkles,
  Filter,
  Video,
  BarChart,
  Gift,
  UserCheck,
  MessageSquare,
  Database,
  RefreshCw,
  UserPlus,
} from "lucide-react";

const Workflows = () => {
  const flowcharts = [
    {
      title: "Automated Candidate Screening & Interview Scheduling",
      benefit: "Screen 250+ applications in minutes vs. 8 hours manually",
      icon: FileSearch,
      nodes: [
        {
          id: 1,
          type: "start",
          label: "New Application",
          sublabel: "submitted",
          icon: Mail,
          color: "#A5D8FF",
        },
        {
          id: 2,
          type: "process",
          label: "AI Resume Screening",
          sublabel: "Ranks top 20% of candidates",
          icon: Filter,
          color: "#D0BCFF",
        },
        {
          id: 3,
          type: "process",
          label: "Auto-send screening questions",
          sublabel: "via email to qualified candidates",
          icon: MessageSquare,
          color: "#B197FC",
        },
        {
          id: 4,
          type: "decision",
          label: "Qualification score > 75%?",
          branches: [
            {
              label: "YES",
              nodes: [
                {
                  id: 5,
                  type: "process",
                  label: "Auto-schedule interview",
                  sublabel: "via calendar link",
                  icon: Calendar,
                  color: "#A5D8FF",
                },
                {
                  id: 7,
                  type: "end",
                  label: "Interview scheduled",
                  sublabel: "Send reminder 24 hours before",
                  icon: CheckCircle,
                  color: "#D0BCFF",
                },
              ],
            },
            {
              label: "NO",
              nodes: [
                {
                  id: 6,
                  type: "process",
                  label: "Send thank you email",
                  sublabel: "Keep in talent pool for future",
                  icon: Mail,
                  color: "#B197FC",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Multi-Stage Interview Process Automation",
      benefit: "Reduce time-to-hire from 42 days to 12 days",
      icon: Users,
      nodes: [
        {
          id: 1,
          type: "start",
          label: "Candidate accepts interview invite",
          icon: UserCheck,
          color: "#A5D8FF",
        },
        {
          id: 2,
          type: "process",
          label: "Round 1: AI video interview",
          sublabel: "Technical screening with AI assessment",
          icon: Video,
          color: "#D0BCFF",
        },
        {
          id: 3,
          type: "process",
          label: "AI scores responses",
          sublabel: "using custom rubric",
          icon: BarChart,
          color: "#B197FC",
        },
        {
          id: 4,
          type: "decision",
          label: "Score > 80%?",
          branches: [
            {
              label: "YES",
              nodes: [
                {
                  id: 5,
                  type: "process",
                  label: "Auto-schedule Round 2",
                  sublabel: "with hiring manager",
                  icon: Calendar,
                  color: "#A5D8FF",
                },
                {
                  id: 6,
                  type: "process",
                  label: "Hiring manager completes interview",
                  sublabel: "and makes decision",
                  icon: Users,
                  color: "#D0BCFF",
                },
                {
                  id: 8,
                  type: "decision-small",
                  label: "Decision: Hire or Reject?",
                  branches: [
                    {
                      label: "HIRE",
                      nodes: [
                        {
                          id: 9,
                          type: "end",
                          label: "Send offer letter",
                          sublabel: "Welcome kit automatically",
                          icon: Gift,
                          color: "#A5D8FF",
                        },
                      ],
                    },
                    {
                      label: "REJECT",
                      nodes: [
                        {
                          id: 10,
                          type: "end",
                          label: "Personalized rejection",
                          sublabel: "Future opportunities note",
                          icon: Mail,
                          color: "#B197FC",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "NO",
              nodes: [
                {
                  id: 7,
                  type: "end",
                  label: "Auto-rejection email",
                  sublabel: "with constructive feedback",
                  icon: XCircle,
                  color: "#B197FC",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Passive Candidate Re-engagement System",
      benefit:
        "Build a qualified talent pipeline automatically - never start from zero",
      icon: Clock,
      nodes: [
        {
          id: 1,
          type: "start",
          label: "Candidate rejected",
          sublabel: "but scored 60-74% (borderline qualified)",
          icon: UserPlus,
          color: "#A5D8FF",
        },
        {
          id: 2,
          type: "process",
          label: "Add to 'Future Talent' database",
          sublabel: "for long-term nurturing",
          icon: Database,
          color: "#D0BCFF",
        },
        {
          id: 3,
          type: "process",
          label: "Wait 3 months",
          sublabel: "Automated patience period",
          icon: Clock,
          color: "#B197FC",
        },
        {
          id: 4,
          type: "decision",
          label: "New relevant position opens?",
          branches: [
            {
              label: "YES",
              nodes: [
                {
                  id: 5,
                  type: "process",
                  label: "AI sends personalized re-engagement email",
                  sublabel: "mentioning new role",
                  icon: Mail,
                  color: "#A5D8FF",
                },
                {
                  id: 6,
                  type: "decision-small",
                  label: "Check interest - Interested in applying?",
                  branches: [
                    {
                      label: "YES",
                      nodes: [
                        {
                          id: 7,
                          type: "end",
                          label: "Fast-track to interview stage",
                          sublabel: "skip initial screening",
                          icon: CheckCircle,
                          color: "#D0BCFF",
                        },
                      ],
                    },
                    {
                      label: "NO RESPONSE",
                      nodes: [
                        {
                          id: 8,
                          type: "end",
                          label: "Continue in talent pool",
                          sublabel: "for next quarter",
                          icon: Database,
                          color: "#B197FC",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "NO",
              nodes: [
                {
                  id: 9,
                  type: "end",
                  label: "Check again next quarter",
                  sublabel: "automatically",
                  icon: RefreshCw,
                  color: "#B197FC",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const FlowNode = ({ node, index }) => {
    const Icon = node.icon;

    const nodeVariants = {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: index * 0.1,
          ease: "easeOut",
        },
      },
    };

    if (node.type === "decision" || node.type === "decision-small") {
      return (
        <motion.div
          className="flex flex-col items-center mx-auto"
          variants={nodeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="relative w-28 h-28 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute w-20 h-20 rotate-45 bg-gradient-to-br from-[#A5D8FF]/20 to-[#D0BCFF]/20 border-2 border-[#A5D8FF] rounded-lg"></div>
            <div className="relative z-10 -rotate-0 text-center px-3">
              <p className="text-[10px] font-semibold text-white leading-tight">
                {node.label}
              </p>
            </div>
          </motion.div>
        </motion.div>
      );
    }

    return (
      <motion.div
        className={`relative rounded-xl p-3 min-w-[160px] max-w-[180px] shadow-lg border-2 ${node.type === "end" ? "ml-0" : "mx-auto"}`}
        style={{
          backgroundColor: `${node.color}20`,
          borderColor: node.color,
        }}
        variants={nodeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-start gap-2">
          {Icon && (
            <motion.div
              className="rounded-lg p-2 flex-shrink-0"
              style={{ backgroundColor: node.color }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-4 h-4 text-black" />
            </motion.div>
          )}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-xs leading-tight mb-1">
              {node.label}
            </p>
            {node.sublabel && (
              <p className="text-[10px] text-gray-300 leading-tight">
                {node.sublabel}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderBranches = (branches, baseIndex = 0) => {
    if (!branches || branches.length === 0) return null;

    return (
      <div className="flex gap-3 justify-start items-start mt-4">
        {branches.map((branch, branchIdx) => (
          <div
            key={branchIdx}
            className="flex flex-col items-center flex-1 max-w-[180px]"
          >
            <motion.div
              className="text-[10px] font-bold mb-2 px-2 py-0.5 rounded-full bg-white/10"
              style={{ color: branchIdx === 0 ? "#A5D8FF" : "#B197FC" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: baseIndex * 0.1 + 0.2 }}
            >
              {branch.label}
            </motion.div>

            <motion.div
              className="w-0.5 h-3 mb-2"
              style={{
                backgroundColor: branchIdx === 0 ? "#A5D8FF" : "#B197FC",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: baseIndex * 0.1 + 0.3 }}
            />

            <div className="flex flex-col gap-3 items-start w-full">
              {branch.nodes.map((node, nodeIdx) => (
                <React.Fragment key={node.id}>
                  <FlowNode node={node} index={baseIndex + nodeIdx} />

                  {nodeIdx < branch.nodes.length - 1 && (
                    <motion.div
                      className="w-0.5 h-4 mx-auto"
                      style={{ backgroundColor: node.color }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (baseIndex + nodeIdx) * 0.1 + 0.4 }}
                    />
                  )}

                  {node.branches &&
                    renderBranches(node.branches, baseIndex + nodeIdx + 1)}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderFlowchart = (nodes) => {
    return (
      <div className="flex flex-col items-center gap-3">
        {nodes.map((node, idx) => (
          <React.Fragment key={node.id}>
            <FlowNode node={node} index={idx} />

            {idx < nodes.length - 1 && !node.branches && (
              <motion.div
                className="w-0.5 h-4"
                style={{ backgroundColor: node.color }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.4 }}
              />
            )}

            {node.branches && renderBranches(node.branches, idx + 1)}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primaryBg via-[#404040]/30 to-dark-primaryBg"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            AI Recruiting Software That Works{" "}
            <span className="text-gradient">Like Your Own HR Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build custom hiring workflows in minutes. No coding required.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {flowcharts.map((flow, flowIndex) => {
            const FlowIcon = flow.icon;
            return (
              <motion.div
                key={flowIndex}
                className="glass-effect rounded-3xl p-6"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A5D8FF] to-[#B197FC] flex items-center justify-center mb-2"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FlowIcon className="w-5 h-5 text-black" />
                  </motion.div>
                  <h3 className="text-base font-bold text-white mb-2 leading-tight">
                    {flow.title}
                  </h3>
                  <p className="text-[#A5D8FF] text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {flow.benefit}
                  </p>
                </div>

                <div className="pb-4">{renderFlowchart(flow.nodes)}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Workflows;