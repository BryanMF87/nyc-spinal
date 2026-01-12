import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RufflePlayer from '../components/RufflePlayer';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


  // ---------------------------
  // this page as built dynamically inside of the Storyblok platform with reusable components
  // ---------------------------


const CommonBackDiagnoses = () => {

  const [openItem, setOpenItem] = useState(null);
  const [openProcedure, setOpenProcedure] = useState(null);

  const diagnoses = [
    {
      id: 'acute-low-back-pain',
      title: 'Acute Low Back Pain',
      content: 'Back pain that gets better in six weeks or less is considered acute low back pain. It could be caused by a strain of a muscle, a sprain in a ligament, or degenerative arthritis. Low back pain is so prevalent that it is the second most common reason people seek medical advice, right behind the common cold. The only way to know if you have it is that it gets better.',
      swfFile: '/files/anim-acute-back-pain.swf',
      url: '/back-and-neck-pain'
    },
    {
      id: 'lumbar-herniated-disk',
      title: 'Lumbar Herniated Disk',
      content: 'Simply stated, when disc material leaks into the spinal canal this is a called a herniated disc. As usual, the symptom is pain, but the kind of pain can vary from patient to patient. While many people with herniated discs have back pain, many other people have none. Symptoms of a herniated disk include pain, numbness, tingling, in the leg or foot. Sciatica refers to the pain that shoots down the leg from a herniated disk. Weakness, worsening pain, or a change in bowel or bladder function may be signs of an emergency and immediate medical attention should be obtained.',
      swfFile: '/files/anim-lumbar-herniated-disc.swf',
      url: '/herniated-discs'
    },
    {
      id: 'cervical-herniated-disc',
      title: 'Cervical Herniated Disc',
      content: 'When a disc ruptures in the neck, pain can radiate from the neck down the arm. Often numbness, tingling and sometimes weakness can be associated with this condition. The symptoms are caused by compression of the nerve that goes down the arm.',
      swfFile: '/files/anim-herniated-disc.swf',
      url: '/herniated-discs'
    },
    {
      id: 'spinal-stenosis',
      title: 'Spinal Stenosis',
      content: 'Spinal stenosis is a condition where there is narrowing of the tube (the spinal canal), which houses your spinal cord and nerves. The narrowing can potentially put pressure or squeeze those nerves. While the most common type of stenosis is degenerative, meaning it comes from ordinary wear and tear, compression of nerves can come from ligaments, disc material, cysts, bone spurs or any combination of these conditions.',
      swfFile: '/files/anim-spinal-stenosis.swf',
      url: '/spinal-stenosis'
    },
    {
      id: 'degenerative-disc-disease',
      title: 'Degenerative Disc Disease',
      content: 'With a degenerated disc, the proteins and cartilage of the disc change as it loses water. This causes the disc to lose its elasticity and ability to absorb shock. Because the disc is no longer cushioning the vertebrae around it, the bones above and below the disc feel more of the stress of movement. This can cause bone spurs and a condition called sclerosis. Both of these are visible on an X-ray.',
      swfFile: '/files/anim-degenerative-disc-disorder.swf',
      url: '/degenerative-disc-disease'
    },
    {
      id: 'spondylolisthesis',
      title: 'Spondylolisthesis',
      content: 'In this condition, one vertebra slips in front of the one below. This can lead to an out-of-line vertebra, which is what we call spondylolisthesis. It sounds horrible, but spondylolisthesis is fairly common and can occur in both children and adults. Most of the time, simple treatments work well.',
      swfFile: '/files/anim-spondylolisthesis.swf',
      url: '/lumbar-spondylolisthesis'
    },
    {
      id: 'scoliosis',
      title: 'Scoliosis',
      content: 'Scoliosis is an abnormal lateral curvature of the spine, meaning the curve goes from side to side. Curvature of the spine is measured in degrees, like angles, and scoliosis that is less than ten degrees rarely requires treatment. Scoliosis can be diagnosed in children, teens and adults. The vast majority of childhood scoliosis is idiopathic—which means we do not know what causes it—and it is classified as either infantile, juvenile or adolescent, depending on the when the child is diagnosed. One concern in younger adults whose skeleton is still growing is that scoliosis can progress at varying rates, and sometimes fairly quickly. It makes it difficult to diagnose because it rarely causes any pain or symptoms. Treatment works best when started before the bones mature. Scoliosis in adults usually progresses more slowly than childhood scoliosis.',
      swfFile: '/files/anim-scoliosis.swf',
      url: '/scoliosis'
    },
    {
      id: 'spondylolysis',
      title: 'Spondylolysis',
      content: 'Given the right circumstances, repetitive stress like bending, lifting, throwing, running, and jumping can cause a bone to weaken and eventually break. Just think of bending a paper clip back and forth. Shins, feet, pelvis, and hips are where stress fractures usually show up, but they can also occur in the spine. When this happens, it is s called spondylolysis. Many times, people do not even know they have one or if they do, treatment is very simple and effective.',
      swfFile: '/files/anim-spondylolysis.swf',
      url: '/spondylolysis'
    },
    {
      id: 'kyphosis',
      title: 'Kyphosis',
      content: 'When there is a loss of the normal alignment in the spine, and the spine bends forward, the condition is called kyphosis. Kyphosis is when your lower back curves the wrong way. If that curve becomes reversed, or bent-over, either by a disease or a surgical procedure, it has the effect of pushing your upper spine forward. When it is bad enough to cause pain and functional limitations, you may need treatment. In the lumbar spine, it is called "flat-back syndrome", but it can also occur in the neck and thoracic spine.',
      swfFile: '/files/anim-kyphosis.swf',
      url: '/lumbar-kyphosis'
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const procedures = [
    {
      id: 'disc-replacement',
      title: 'Disc Replacement',
      content: 'At New York Center for Spinal Disorders, our Disc Replacement procedure offers an innovative alternative to traditional fusion surgery. Instead of removing the disc and fusing the adjacent vertebrae, our expert surgeons replace the degenerated disc with an artificial implant, preserving motion and providing a more natural range of movement. Our team at NYCSD is committed to restoring function and reducing pain through this advanced procedure. By maintaining spinal mobility while stabilizing the affected segment, disc replacement can offer significant improvements in quality of life.',
      url: '/disc-replacement'
    },
    {
      id: 'discectomy-microdiscectomy',
      title: 'Discectomy (Microdiscectomy)',
      content: `The New York Center for Spinal Disorders offers Discectomy (Microdiscectomy)—a minimally invasive procedure that precisely removes the disc fragment compressing your nerve. Our expert doctors at NYCSD use state-of-the-art microscopes and endoscopes to target the herniated portion while preserving surrounding tissues, helping to alleviate pain and restore function.
  At NYCSD, our team is dedicated to providing you with a personalized treatment plan that prioritizes both safety and a speedy recovery. Discover how our approach to microdiscectomy can help you regain a pain-free life.`,
      url: '/microdiscectomy'
    },
    {
      id: 'revision-spinal-surgery',
      title: 'Revision Spinal Surgery',
      content: 'Revision Spinal Surgery at New York Center for Spinal Disorders is a specialized procedure performed when previous spinal surgeries have failed to provide lasting relief or have resulted in complications. Our experienced surgeons at NYCSD are adept at addressing issues such as non-union, hardware failure, or persistent pain from earlier procedures. Our team takes a comprehensive, individualized approach to revision surgery, aiming to correct the underlying problem and restore spinal stability and function. With advanced techniques and meticulous planning, NYCSD is dedicated to helping patients regain quality of life when initial treatments have not met expectations.',
      url: '/revision-spinal-surgery'
    },
    {
      id: 'laminectomy',
      title: 'Laminectomy',
      content: `At the New York Center for Spinal Disorders, our Laminectomy procedure is designed to relieve spinal cord or nerve root pressure by removing a portion of the vertebral lamina. This procedure is often recommended for patients with spinal stenosis or other compressive conditions affecting the cervical or lumbar spine.
  Our highly skilled doctors and multidisciplinary team work together to ensure a safe procedure and effective recovery plan. Experience relief from chronic back or leg pain through our proven laminectomy technique at NYCSD.`,
      url: '/laminectomy'
    },
    {
      id: 'laminotomy',
      title: 'Laminotomy',
      content: `Laminotomy at New York Center for Spinal Disorders is a focused procedure that removes only a small portion of the lamina to relieve nerve compression. This approach is ideal for patients with localized nerve impingement due to herniated discs or early-stage spinal stenosis.
  Our dedicated doctors perform laminotomy with precision to preserve spinal stability and promote a faster recovery. Trust NYCSD to deliver advanced care that targets your specific spinal needs.`,
      url: '/laminotomy'
    },
    {
      id: 'foraminotomy',
      title: 'Foraminotomy',
      content: `At New York Center for Spinal Disorders, our Foraminotomy procedure enlarges the neural foramina—the openings through which spinal nerves exit—to relieve nerve compression. This technique is particularly effective in reducing radicular symptoms caused by bone spurs, herniated discs, or ligament thickening.
  Our expert team of doctors utilizes advanced imaging and minimally invasive methods to perform foraminotomy safely and efficiently. Let NYCSD help restore your nerve function and reduce chronic pain.`,
      url: '/foraminotomy'
    },
    {
      id: 'anterior-cervical-discectomy-and-fusion-acdf',
      title: 'Anterior Cervical Discectomy and Fusion (ACDF)',
      content: `Anterior Cervical Discectomy and Fusion (ACDF) is a trusted procedure at New York Center for Spinal Disorders that relieves nerve compression in the cervical spine by removing a problematic disc and fusing adjacent vertebrae. Our board-certified spine surgeons approach the spine from the front to ensure optimal access and stabilization.
  NYCSD is committed to restoring neck function and reducing pain through advanced ACDF techniques. Our experienced doctors work with you every step of the way to design a treatment plan tailored to your specific condition.`,
      url: '/anterior-cervical-discectomy-and-fusion-acdf'
    },
    {
      id: 'posterior-lumbar-fusion-plif-tlif',
      title: 'Posterior Lumbar Fusion (PLIF, TLIF)',
      content: `At New York Center for Spinal Disorders, our Posterior Lumbar Fusion procedures—including PLIF and TLIF—are designed to stabilize the lumbar spine by fusing adjacent vertebrae from a posterior approach. This procedure is essential for patients with degenerative disc disease, spondylolisthesis, or spinal instability.
  Our team of expert spine surgeons at NYCSD uses state-of-the-art techniques to perform fusion with precision and care. Experience lasting relief from chronic back pain and improved stability through our advanced fusion methods.`,
      url: '/posterior-lumbar-fusion-plif-tlif'
    },
    {
      id: 'anterior-lumbar-interbody-fusion-alif',
      title: 'Anterior Lumbar Interbody Fusion (ALIF)',
      content: `Anterior Lumbar Interbody Fusion (ALIF) at New York Center for Spinal Disorders is a surgical procedure where the degenerated disc is removed via an anterior approach and replaced with a bone graft or cage to fuse the lumbar vertebrae. This technique restores disc height and alignment while stabilizing the spine.
  Our experienced doctors at NYCSD perform ALIF to reduce lower back pain and improve spinal biomechanics while avoiding extensive muscle disruption. Trust our team to deliver a personalized and effective fusion solution.`,
      url: '/anterior-lumbar-interbody-fusion-alif'
    },
    {
      id: 'extreme-lateral-interbody-fusion-xlif',
      title: 'Extreme Lateral Interbody Fusion (XLIF)',
      content: `At New York Center for Spinal Disorders, Extreme Lateral Interbody Fusion (XLIF) is a minimally invasive fusion procedure that approaches the lumbar spine from the side. This lateral technique minimizes muscle trauma while allowing for effective removal of the disc and insertion of a fusion cage.
  Our dedicated team of spine specialists at NYCSD utilizes XLIF to address degenerative disc disease, spondylolisthesis, and select cases of spinal deformity, ensuring reduced blood loss and a shorter hospital stay. Experience the benefits of advanced lateral fusion with NYCSD.`,
      url: '/extreme-lateral-interbody-fusion-xlif'
    },
    {
      id: 'oblique-lumbar-interbody-fusion-olif',
      title: 'Oblique Lumbar Interbody Fusion (OLIF)',
      content: `Oblique Lumbar Interbody Fusion (OLIF) at New York Center for Spinal Disorders is a minimally invasive procedure that utilizes an oblique approach to the lumbar spine. This method preserves the posterior muscles while effectively removing the disc and inserting a fusion cage.
  Our expert doctors at NYCSD choose OLIF for its ability to restore disc height and correct alignment with minimal tissue disruption. Discover a cutting-edge solution for lumbar instability and degenerative disc disease through OLIF.`,
      url: '/oblique-lumbar-interbody-fusion-olif'
    },
    {
      id: 'corpectomy',
      title: 'Corpectomy',
      content: `Corpectomy at New York Center for Spinal Disorders is a complex surgical procedure that involves removing a portion or the entire vertebral body along with adjacent discs to decompress the spinal cord. This approach is often necessary for severe trauma, tumor involvement, or advanced degeneration.
  Our highly experienced surgeons at NYCSD perform corpectomy with meticulous care, ensuring reconstruction and stabilization of the spine for long-term relief. Explore how our team uses advanced techniques to restore spinal function.`,
      url: '/corpectomy'
    },
    {
      id: 'spinal-decompression-for-stenosis',
      title: 'Spinal Decompression for Stenosis',
      content: `The New York Center for Spinal Disorders offers Spinal Decompression for Stenosis, a procedure designed to relieve the pressure on the spinal cord and nerve roots caused by narrowing of the spinal canal. This procedure involves the removal of bone, ligament, or disc material to create more space for the nerves.
  Our expert doctors at NYCSD customize decompression surgery to address your specific condition, aiming to improve function and reduce pain. Experience targeted relief from spinal stenosis with our advanced treatment options.`,
      url: '/spinal-decompression-for-stenosis'
    },
    {
      id: 'minimally-invasive-spine-fusion-mis-fusion',
      title: 'Minimally Invasive Spine Fusion (MIS Fusion)',
      content: `Minimally Invasive Spine Fusion (MIS Fusion) at New York Center for Spinal Disorders is an advanced procedure that fuses unstable spinal segments through small incisions. This technique minimizes muscle dissection, reduces blood loss, and typically results in a quicker recovery compared to traditional open fusion surgeries.
  Our expert spine surgeons at NYCSD are committed to delivering the benefits of fusion while preserving the integrity of your surrounding tissues. Discover how MIS Fusion can restore stability and relieve chronic back pain with a less invasive approach.`,
      url: '/minimally-invasive-spine-fusion-mis-fusion'
    }
  ];
  
  const toggleProcedure = (id) => {
    setOpenProcedure(openProcedure === id ? null : id);
  };  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* <Helmet>
        <title>Common Spine Diagnoses - New York Center for Spinal Disorders</title>
        <meta name="description" content="Explore common spine conditions and their treatments at the New York Center for Spinal Disorders. Expert care for herniated discs, spinal stenosis, and more." />
        <meta name="keywords" content="spinal disorders and treatment, herniated discs, back pain, spine conditions, New York, spine specialists, orthopedic care, spine care" />
        <meta name="author" content="New York Center for Spinal Disorders" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Common Spine Diagnoses - New York Center for Spinal Disorders" />
        <meta property="og:description" content="The New York Center for Spinal Disorders provides comprehensive diagnosis and treatment for various spine conditions, offering expert care and advanced treatment options." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/images/logo-header.png" />
        <meta property="og:url" content="https://www.nycspinaldisorders.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New York Center for Spinal Disorders - Common Diagnoses" />
        <meta name="twitter:description" content="Founded by Dr. Tindel, the New York Center for Spinal Disorders treats adults for herniated discs, back pain, and more spine conditions." />
        <meta name="twitter:image" content="/images/logo-header.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#4a90e2" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet> */}

      <Header />
      
      <div className="relative h-[40vh] bg-gradient-to-r from-[#003666] to-[#0062B1]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003666]/90 to-[#0062B1]/90" />
          <img
            src="/images/spineanatomy.png"
            alt="Spine conditions background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Common Back Diagnoses</h1>
            <p className="text-2xl text-sky-100">Identifying the typical spine conditions</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#003666] mb-6">Empowering You with Knowledge and Care</h2>
          <p className="text-lg text-gray-700 mb-6">
            Understanding your back or neck pain is the crucial first step toward reclaiming your quality of life. At the New York Center for Spinal Disorders in Manhattan, we specialize in diagnosing and effectively treating a wide range of common spinal conditions. Below, you’ll discover clear, patient-friendly explanations of frequently treated conditions and procedures, empowering you with the information you need to make confident decisions about your health.
          </p>
          <div className="bg-sky-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-[#003666] mb-4">Did You Know?</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0062B1] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">Approximately 80% of adults will experience back pain at some point.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0062B1] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">Most cases significantly improve with timely care and treatment.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#0062B1] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">Early intervention with a spine specialist can dramatically enhance your outcome and recovery.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#003666] to-[#0062B1] p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">When to See a Specialist</h3>
            <p className="text-sky-100 mb-4">
              While many episodes of back pain resolve naturally, it’s important to seek expert guidance if you experience:
            </p>
            <ul className="space-y-2 text-sky-100">
              <li>• Pain lasting beyond a few weeks</li>
              <li>• Numbness, tingling, or weakness</li>
              <li>• Pain accompanied by fever</li>
              <li>• Unexplained weight loss</li>
              <li>• Pain following trauma or injury</li>
            </ul>
            <p className="text-sky-100 mt-4">
              Your comfort, clarity, and confidence are our top priorities. If you’re experiencing these symptoms, our specialists are here to help.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-[#003666] mb-4">Why Patients Choose Us</h3>
            <p className="text-gray-700 mb-4">
              At NY Center for Spinal Disorders, we personalize care based on your specific needs, symptoms, and lifestyle. Our comprehensive approach includes:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• In-depth consultations to understand your history and concerns</li>
              <li>• Thorough physical examinations</li>
              <li>• Advanced imaging to pinpoint accurate diagnoses</li>
              <li>• Non-invasive, conservative treatment options whenever possible</li>
              <li>• State-of-the-art surgical solutions when necessary, performed by experienced specialists</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We’re dedicated to getting you back to the life you love—comfortably, confidently, and without delay.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#003666] mb-6">Common Spine Conditions</h2>
        <p className="text-lg text-gray-700 mb-8">
          Click on each condition below to learn more about its causes, symptoms, and treatment options. Each section includes an educational animation to help visualize the condition.
        </p>

        <div className="space-y-4">
          {diagnoses.map((diagnosis) => (
            <div
              key={diagnosis.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(diagnosis.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-sky-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-[#003666]">
                  {diagnosis.title}
                </h3>
                {openItem === diagnosis.id ? (
                  <ChevronUp className="w-6 h-6 text-[#0062B1]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#0062B1]" />
                )}
              </button>
              
              {openItem === diagnosis.id && (
                <div className="px-6 py-4 bg-gradient-to-br from-sky-50 to-[#0062B1]/10">
                  <div className="prose max-w-none mb-6">
                    <p className="text-gray-700">{diagnosis.content}</p>
                  </div>
                  <div className="rounded-xl overflow-hidden mb-6">
                    <div className="bg-transparent">
                      <RufflePlayer
                        swfUrl={diagnosis.swfFile}
                        width="100%"
                        height="400px"
                      />
                    </div>
                    <p className="text-center text-gray-600 py-2 text-sm">
                      Line Drawing Animated Video of {diagnosis.title}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Link 
                      to={diagnosis.url}
                      className="px-6 py-3 bg-[#0062B1] text-white rounded-lg hover:bg-[#003666] transition duration-300 inline-flex items-center"
                    >
                      Learn more about {diagnosis.title}
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#003666] mb-6 mt-12">Common Spine Procedures</h2>
        <p className="text-lg text-gray-700 mb-8">
          Below, you'll find an overview of frequently performed spine procedures, including what they aim to address and how they may benefit you.
        </p>

        <div className="space-y-4">
          {procedures.map((procedure) => (
            <div
              key={procedure.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleProcedure(procedure.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-sky-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-[#003666]">
                  {procedure.title}
                </h3>
                {openProcedure === procedure.id ? (
                  <ChevronUp className="w-6 h-6 text-[#0062B1]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#0062B1]" />
                )}
              </button>

              {openProcedure === procedure.id && (
                <div className="px-6 py-4 bg-gradient-to-br from-sky-50 to-[#0062B1]/10">
                  <p className="text-gray-700 mb-6">{procedure.content}</p>
                  <div className="flex justify-center">
                    <Link 
                      to={procedure.url}
                      className="px-6 py-3 bg-[#0062B1] text-white rounded-lg hover:bg-[#003666] transition duration-300 inline-flex items-center"
                    >
                      Learn more about {procedure.title}
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-sky-50 to-[#0062B1]/10 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#003666] mb-6">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#003666] mb-4">Explore Conditions Library</h3>
                <p className="text-gray-700 mb-4">
                  Learn about various spine conditions, their symptoms, and available treatment options.
                </p>
                <Link to="/conditions-library" className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666]">
                  View Conditions Library
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#003666] mb-4">Explore Procedures Library</h3>
                <p className="text-gray-700 mb-4">
                  Discover advanced surgical and non-surgical procedures for spine care.
                </p>
                <Link to="/procedures-library" className="inline-flex items-center text-[#0062B1] font-semibold hover:text-[#003666]">
                  View Procedures Library
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
              <div className="col-span-full">
                <h3 className="text-xl font-semibold text-[#003666] mb-4">Schedule a Consultation</h3>
                <p className="text-gray-700 mb-4">
                  If you're experiencing any of these conditions, we're here to help. Schedule a consultation to discuss your specific case.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center px-6 py-3 bg-[#0062B1] text-white rounded-lg hover:bg-[#003666] transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default CommonBackDiagnoses;