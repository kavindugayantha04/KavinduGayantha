import {
  SiApachetomcat,
  SiArduino,
  SiBootstrap,
  SiC,
  SiCss,
  SiExpress,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJira,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPostman,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiStreamlit,
  SiSwagger,
  SiTensorflow,
  SiThymeleaf,
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { VscVscode } from 'react-icons/vsc'
import {
  HiOutlineChartBar,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineCube,
  HiOutlineFolderOpen,
  HiOutlineSquares2X2,
  HiOutlineViewColumns,
} from 'react-icons/hi2'

/** Exact keys must match strings in `skills.js` */
const SKILL_TAG_ICONS = {
  Python: SiPython,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  C: SiC,
  SQL: SiSqlite,

  HTML: SiHtml5,
  CSS: SiCss,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  JSP: SiApachetomcat,
  Servlets: SiOpenjdk,
  Bootstrap: SiBootstrap,
  Thymeleaf: SiThymeleaf,

  MongoDB: SiMongodb,
  MySQL: SiMysql,
  'Microsoft SQL Server': DiMsqlServer,

  Pandas: SiPandas,
  NumPy: SiNumpy,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  'Scikit-learn': SiScikitlearn,
  Classification: HiOutlineCpuChip,
  Clustering: HiOutlineSquares2X2,
  'Data Visualization': HiOutlineChartBar,

  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': VscVscode,
  'IntelliJ IDEA': SiIntellijidea,
  Streamlit: SiStreamlit,
  Flask: SiFlask,
  'Arduino IDE': SiArduino,
  Postman: SiPostman,

  MVC: HiOutlineViewColumns,
  Agile: SiJira,
  'REST APIs': SiSwagger,
  OOP: HiOutlineCube,
  CRUD: SiMysql,
  'File Handling': HiOutlineFolderOpen,
}

export function getSkillTagIcon(skillName) {
  return SKILL_TAG_ICONS[skillName] ?? HiOutlineCommandLine
}
